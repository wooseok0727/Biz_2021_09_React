import React, { useState } from "react";

const b_flag_text = ["일반", "중요", "매우중요", "긴급"];

// { bucket }
// props.bucket 을 직접 사용하도록 변수 생성하기
function BuckItem({ bucket, flag_change }) {
  const [bucket_input, setBucketInput] = useState({
    b_title: "",
    isEdit: false,
  });
  return (
    <tr key={bucket.b_id}>
      <td
        // onClick={flag_change} : 단순히 flag_change 함수를 호출
        //</tr>flag_change 에 id값을 매개변수로 전달하기 위한 코드
        // 클릭된 bucket의 id값을 flag_change 함수에 전달하기
        onClick={() => {
          flag_change(bucket.b_id);
        }}
      >
        {b_flag_text[bucket.b_flag % 4]}
      </td>
      <td>{bucket.b_start_date}</td>
      <td
        onClick={() => {
          setBucketInput({
            ...bucket_input,
            isEdit: !bucket_input.isEdit,
            b_title: bucket.b_title,
          });
        }}
      >
        {bucket_input.isEdit ? (
          <input defaultValue={bucket_input.b_title} />
        ) : (
          <span>{bucket.b_title}</span>
        )}
      </td>
      <td>{bucket.b_end_date}</td>
      <td>
        <input type="checkbox" />
      </td>
    </tr>
  );
}

export default BuckItem;