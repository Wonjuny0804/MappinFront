import React from "react";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import Portal from "../Portal/Portal";
import styles from "./Modal.module.scss";

interface ModalProps {
  visible: boolean;
  title: string;
  onClose?: () => void;
  children: JSX.Element;
}

function Modal({ visible, title, onClose, children }: ModalProps): JSX.Element {
  const dialogRef = React.useRef<HTMLDivElement>(null);
  // 모달이 열려있을때는 스크롤 처리가 되지 않도록 설정
  React.useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [visible]);

  React.useEffect(() => {
    if (visible) {
      const dialogNode = dialogRef.current;

      dialogNode?.setAttribute("tabIndex", "-1");
      dialogNode?.focus();

      // 다이얼로그 뒤에 영역이 모바일 보이스리더기에 읽히지 않도록 처리
      const rootNode = document.getElementById("root");
      if (rootNode) {
        rootNode.setAttribute("aria-hidden", "true");
        rootNode.style.userSelect = "none";
      }

      const handleFocusTrap = (e: KeyboardEvent) => {
        const focusableNodeList = dialogNode?.querySelectorAll(
          "a, button, input, select, textarea"
        ); // 참고로 a 태그는 href 속성이나 tabindex 속성이 있으면 focusable함.
        // 첫 번째 포커스 요소와 마지막 포커스 요소를 기억해놓아야
        // 다이얼로그가 닫히지 않는 한 다이얼로그 내에서 포커싱이 순환될 수 있음.

        if (focusableNodeList) {
          const firstFocusNode = focusableNodeList[0] as HTMLElement;
          const lastFocusNode = focusableNodeList[
            focusableNodeList.length - 1
          ] as HTMLElement;

          // 첫 번째 포커스 요소에서 shift + tab 동시에 누르면? -> 마지막 포커스 요소로 이동!
          if (e.target === firstFocusNode && e.shiftKey && e.key === "Tab") {
            e.preventDefault();
            lastFocusNode.focus();
          }

          // 마지막 포커스 요소에서 tab 누르면? -> 첫 번째 포커스 요소로 이동!
          if (e.target === lastFocusNode && !e.shiftKey && e.key === "Tab") {
            e.preventDefault();
            firstFocusNode.focus();
          }
        }

        window.addEventListener("keydown", handleFocusTrap);
      };

      // clean-up function
      return () => {
        dialogNode?.removeAttribute("tabIndex");
        if (rootNode) {
          rootNode.removeAttribute("aria-hidden");
          window.removeEventListener("keydown", handleFocusTrap);
          rootNode.style.userSelect = "auto";
        }
      };
    }
  }, [visible]);

  return (
    <Portal id="dialog-container">
      {visible ? (
        <>
          <div
            className={styles.overlay}
            role="presentation"
            onClick={onClose}
          />
          <div
            className={styles.modal}
            role="dialog"
            ref={dialogRef}
            aria-modal
            aria-label={`${title} 모달창`}
          >
            <Button
              styling={styles.closeBtn}
              secondary
              type="button"
              onClick={onClose}
            >
              <Icon type="Close" />
            </Button>
            <h2>{title}</h2>
            {children}
          </div>
        </>
      ) : null}
    </Portal>
  );
}

export default Modal;
