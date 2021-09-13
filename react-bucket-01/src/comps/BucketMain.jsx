import React, { useState } from "react";
import BuckList from "./BuckList";
import BuckInput from "./BuckInput";

function BucketMain() {
  const [buckList, setBuckList] = useState([
    {
      b_id: 0,
      b_flag: 0,
      b_start_Date: "2021-09-13",
      b_title: "리액트 정복",
      b_end_date: "",
      b_end_check: false,
      b_cancel: false,
    },
    {
      b_id: 1,
      b_flag: 0,
      b_start_Date: "2021-09-13",
      b_title: "추석맞이",
      b_end_date: "",
      b_end_check: false,
      b_cancel: false,
    },
  ]);

  const flag_change = (id) => {
    const result = buckList.map((bucket) => {
      if (bucket.b_id === id) {
        return {
          ...bucket,
          b_flag: bucket.b_flag >= 3 ? 0 : bucket.b_flag + 1,
        };
      } else {
        return bucket;
      }
    });
    setBuckList([...result]);
  };

  return (
    <div className="w3-container-fluid">
      <BuckInput />
      {/* BuckList 컴포넌트에 buckList 상태(변수) 전달하기 */}
      <BuckList buckList={buckList} flag_change={flag_change} />
    </div>
  );
}

export default BucketMain;
