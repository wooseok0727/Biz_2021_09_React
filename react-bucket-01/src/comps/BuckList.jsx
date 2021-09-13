import React from "react";
import BuckItem from "./BuckItem";

function BuckList(props) {
  /**
   * 부모 컴포넌트로 부터 전달받은 bucketList 를
   * 사용하기 위해 변수로 선언하기
   *
   * BucketMain 에서 보낸 배열변수와 2개의 함수를
   * props 로 부터 분리해내기
   */

  const { buckList } = props.args;

  const buckBody = buckList.map((bucket) => {
    return (
      <BuckItem
        args={props.args}
        bucket={bucket}
        // flag_change={flag_change}
        // bucket_update={bucket_update}
      />
    );
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
