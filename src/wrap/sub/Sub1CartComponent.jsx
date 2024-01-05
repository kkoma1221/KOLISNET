import React from 'react';
import './scss/sub1.scss';

export default function Sub1CartComponent(){
    return (
        <div className='sub1'>
            <section id="section1">
                <div className="container">
                    <div className="content">
                        <div className="left"></div>
                        <div className="right" id='sub1Cart'>
                            <div className="title">
                                <h2>바구니</h2>
                                <h3>바구니에 담은 도서리스트를 볼 수 있습니다.</h3>
                            </div>
                            <div className="cart">
                                <div className="cart-length">
                                    <p>총 게시물 <strong> 0 </strong> 건</p>
                                </div>
                                <form action="">
                                    <div className="cart-content">
                                        <div className="select-box">
                                            <label htmlFor="">
                                                <input type="checkbox" />
                                            </label>
                                            <button><img src="./images/sub/sub1/btn_cart.png" alt="" /><span>선택항목삭제</span></button>
                                        </div>
                                        <ul>
                                            <li className='empty'><p>등록된 자료가 없습니다.</p></li>
                                            <li>
                                                    <div className="row1">
                                                        <span className='chk-btn'><input type="checkbox" /></span>
                                                        <span className='book-title'>
                                                            <a href="!#">{`${'location.state.bookTitle'}/ ${'location.state.bookWriter'}`}</a>
                                                        </span>
                                                    </div>
                                                    <div className="row2">
                                                        <ul>
                                                            <li><h5>{`발행사항 : ${'location.state.bookPublisher'} , ${'location.state.bookYear'}`}</h5></li>
                                                            <li><h5>{`분류기호 : ${'location.state.bookSortNum'}`}</h5></li>
                                                            <li><h5>소장도서관 : {`${'state.library.length'}개관`}</h5></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};