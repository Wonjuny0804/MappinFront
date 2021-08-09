import { useState } from "react";
import "react-dates/initialize";
import { DayPickerRangeController, FocusedInputShape } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "moment/locale/ko";
import moment, { Moment } from "moment";
import styles from "./Schedule.module.scss";
import PageNav from "../../components/PageNav/PageNav";

function Schedule() {
  const [startDate, setStartDate] = useState<Moment | null>(null);
  const [endDate, setEndDate] = useState<Moment | null>(null);
  const [focus, setFocus] = useState<FocusedInputShape | null>("startDate");

  const handleOnDateChange = (args: {
    startDate: Moment | null;
    endDate: Moment | null;
  }) => {
    setStartDate(args.startDate);
    setEndDate(args.endDate);
  };

  const startDateFormatted = startDate
    ? startDate.format("YYYY.M.D")
    : "출발일";
  const endDateFormatted = endDate ? endDate.format("M.D") : "종료일";
  const containerStyle = startDate
    ? { maxWidth: "215px" }
    : { maxWidth: "144px" };

  return (
    <div className={styles.schedule}>
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>여행 일정 만들기</h1>
        <div className={styles.headerPhrase}>
          <p>일정을 선택해 여행 계획을 세워보세요! :)</p>
          <a href="#">나중에 하기</a> {/*링크로 교체*/}
        </div>
      </header>
      <div className={styles.input}>
        <label>일정</label>
        <div className={styles.container} style={containerStyle}>
          <input
            className={startDate ? styles.selected : ""}
            type="text"
            name="start-date"
            value={startDateFormatted}
            readOnly
          />
          <span>-</span>
          <input
            className={endDate ? styles.selected : ""}
            type="text"
            name="end-date"
            readOnly
            value={endDateFormatted}
          />
        </div>
      </div>
      <section className={styles.calander}>
        <DayPickerRangeController
          startDate={startDate}
          endDate={endDate}
          onDatesChange={handleOnDateChange}
          focusedInput={focus}
          onFocusChange={(focus: FocusedInputShape | null) =>
            setFocus(focus || "startDate")
          }
          hideKeyboardShortcutsPanel
          numberOfMonths={1}
          isOutsideRange={(day: Moment) => day.isSameOrBefore(moment())}
          daySize={60}
          initialVisibleMonth={6}
        />
      </section>
      <PageNav />
    </div>
  );
}

export default Schedule;
