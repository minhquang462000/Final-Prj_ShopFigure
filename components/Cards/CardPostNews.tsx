import * as React from 'react';
import { IoCalendarNumberOutline } from 'react-icons/io5';

export interface ICardPostNewsProps {
}

export default function CardPostNews (props: ICardPostNewsProps) {
  return (
    <div>
        <img src="https://file.hstatic.net/200000462939/article/83vb6wf2_img7_j4pxg3kq_480x480_1__4c799193280d451f9f399f89398abbf8_large.jpg" alt="" />
        <h1>Tiêu đề bài Post abc abc bac bidklfjdkfjsdklmf sdokhjfsd odkfjsd kjdfkl kljsdfkl kljsdfklj sdflkjsd sdfklfjds kjfdkll sdkfjds</h1>
        <p>Description shda sadjh ákjdh ádjkh ídgh hjsbdv jhsac sạkdh jknasd jkhsad jkl jshd jkshd ạkds ádjbn ádjh ạdn nbsdjk dkjsa nkdjas sadkh sd klsad klsdja klsjad klsdj msdja ádjnas ádbn dạkldh ádjkn sadkn âsdhg</p>
        <span>
        <IoCalendarNumberOutline />
        <span>05/05/2022</span>
        </span>
      </div>
  );
}
