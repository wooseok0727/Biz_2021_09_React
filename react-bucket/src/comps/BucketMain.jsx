import React from "react";

function BucketMain() {
  return (
    <section className="main_section">
      <div>
        <input placeholder="버킷에 추가할 내용을 입력하세요" />
        <table className="bucket_list">
          <thead>
            <tr>
              <th>FLAG</th>
              <th>DATE</th>
              <th>BUCKET</th>
              <th>완료</th>
              <th>취소</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>중요</td>
              <td>2021-09-01 00:00:00</td>
              <td>리액트 실습</td>
              <td>empty</td>
              <td>
                <input type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default BucketMain;
