import { useState } from "react";
import "react-dates/initialize";
import { DayPickerRangeController, FocusedInputShape } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import "moment/locale/ko";
import moment, { Moment } from "moment";
import styles from "./Schedule.module.scss";
import commonStyles from "../../styles/common.module.scss";
import PageNav from "../../components/PageNav/PageNav";
import { useHistory, Link } from "react-router-dom";
import "../../styles/calander-override.scss";
import "styles/calander-override.scss";
import { useAppSelector, useAppDispatch } from "redux/hook";
import { Itrip } from "core/interface/trip";
import { setDate } from "redux/features/tripSlice";

function Schedule() {

  const myTrip: Itrip = useAppSelector(state => state.trip);

  const [startDate, setStartDate] = useState<Moment | null>(moment(myTrip.startDate) || null);
  const [endDate, setEndDate] = useState<Moment | null>(moment(myTrip.endDate) || null);
  const [focus, setFocus] = useState<FocusedInputShape | null>("startDate");

  const history = useHistory();

  const dispatch = useAppDispatch();

  const handleOnDateChange = (args: {
    startDate: Moment | null;
    endDate: Moment | null;
  }) => {
    setStartDate(args.startDate);
    setEndDate(args.endDate);
  };

  const startDateFormatted = startDate
    ? startDate.format("YYYY.MM.D")
    : "출발일";
  const endDateFormatted = endDate ? endDate.format("YYYY.MM.DD") : "종료일";
  const containerStyle = startDate
    ? { maxWidth: "215px" }
    : { maxWidth: "144px" };

  const handleOnGoBack = (): void => {
    history.push("/");
  };

  const handleOnNext = (): void => {
    history.push("/search");


    if (startDate && endDate) {
      dispatch(setDate({
        startDate: moment(startDate).format("YYYY.MM.DD"),
        endDate: moment(endDate).format("YYYY.MM.DD")
      }));
    }
  };

  return (
    <main className={styles.schedule}>
      <header className={commonStyles.header}>
        <h1 className={commonStyles.headerTitle}>여행 일정 만들기</h1>
        <div className={commonStyles.headerPhrase}>
          <p>일정을 선택해 여행 계획을 세워보세요! :)</p>
          <Link to="/search">나중에 하기</Link>
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
          initialVisibleMonth={() => moment()}
        />
      </section>
      <PageNav prevOnClick={handleOnGoBack} nextOnClick={handleOnNext} />
    </main>
  );
}

export default Schedule;
