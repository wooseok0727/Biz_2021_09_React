import React from "react";
import BuckItem from "./BuckItem";

function BuckList(props) {
  /**
   * 부모 컴포넌트로 부터 전달받은 bucketList 를
   * 사용하기 위해 변수로 선언하기
   */

  const { buckList, flag_change } = props;

  const buckBody = buckList.map((bucket) => {
    return <BuckItem bucket={bucket} flag_change={flag_change} />;
  });

  return (
    <table className="w3-table w3-table-all w3-margin">
      <thead>
        <tr>
          <th>FLAG</th>
          <th>DATE</th>
          <th>BUCKET</th>
          <th>COMPLETE</th>
          <th>CANCLE</th>
        </tr>
      </thead>
      <tbody>{buckBody}</tbody>
    </table>
  );
}

export default BuckList;
