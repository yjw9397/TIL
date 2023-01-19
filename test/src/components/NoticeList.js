import React from 'react';
import CommonTable from './table/CommonTable';
import CommonTableColumn from './table/CommonTableColumn';
import CommonTableRow from './table/CommonTableRow';

function NoticeList () {
  return (
    <div>
      <CommonTable headersName={['글번호', '제목', '등록일', '조회수']}>
        <CommonTableRow>
          <CommonTableColumn>1</CommonTableColumn>
          <CommonTableColumn>첫번째 게시글입니다.</CommonTableColumn>
          <CommonTableColumn>2020-10-25</CommonTableColumn>
          <CommonTableColumn>6</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>2</CommonTableColumn>
          <CommonTableColumn>두번째 게시글입니다.</CommonTableColumn>
          <CommonTableColumn>2020-10-25</CommonTableColumn>
          <CommonTableColumn>5</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>3</CommonTableColumn>
          <CommonTableColumn>세번째 게시글입니다.</CommonTableColumn>
          <CommonTableColumn>2020-10-25</CommonTableColumn>
          <CommonTableColumn>1</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>4</CommonTableColumn>
          <CommonTableColumn>네번째 게시글입니다.</CommonTableColumn>
          <CommonTableColumn>2020-10-25</CommonTableColumn>
          <CommonTableColumn>2</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>5</CommonTableColumn>
          <CommonTableColumn>다섯번째 게시글입니다.</CommonTableColumn>
          <CommonTableColumn>2020-10-25</CommonTableColumn>
          <CommonTableColumn>4</CommonTableColumn>
        </CommonTableRow>
      </CommonTable>
    </div>
  )
}

export default NoticeList;


// https://goddino.tistory.com/154
// axios로 데이터 가져와서 만들기