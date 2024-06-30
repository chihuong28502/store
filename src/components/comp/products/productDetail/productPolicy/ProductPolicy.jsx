/* eslint-disable react/prop-types */
import { useState } from 'react';

const ProductPolicy = ({ userData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };
    const toggleContent1 = () => {
        setIsOpen1(!isOpen1);
    };
    const toggleContent2 = () => {
        setIsOpen2(!isOpen2);
    };

    return (
        <>
            <div className=" mb-2">
                <p
                    className="dropdown dropdown-6 mb-0 cursor-pointer flex items-center"
                    onClick={toggleContent}
                >
                    <i
                        className={`fas fa-caret-right transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                    ></i>
                    <span className="inline-block ml-2 text-[0.9rem]">
                        Thông tin chi tiết
                    </span>
                </p>
                <div
                    className={`dropdown-menu dropdown-menu--animated dropdown-menu-6  mt-2 ${isOpen ? 'block' : 'hidden'}`}
                >
                    <p className="font-normal text-[0.85rem]">
                        <strong className="block">{userData.name}</strong>
                        <strong>✦ Chất liệu</strong>: 100% Cotton 230 GSM
                        <br />
                        <strong>✦ Fitting</strong>: Oversized
                        <br />
                        <strong>✦ Chi tiết</strong>:<br />
                        + Sử dụng chất liệu vải 100% cotton định lượng 230 gsm
                        dày dặn, thấm hút mồ hôi tốt.
                        <br />
                        + Thiết kế in lưới graphic những chai rượu quen thuộc và
                        phổ biến tại kệ tủ của nhiều quán bar.
                        <br />
                        + Được thể hiện cách điệu qua dạng hình vẽ tay, và sắp
                        xếp xen kẽ tạo thành pattern cho chiếc áo.
                        <br />
                        <strong>✦ Hướng dẫn bảo quản</strong>:<br />
                        + Sản phẩm bền nhất khi giặt tay.
                        <br />
                        + Nếu giặt máy, hãy giặt ở nhiệt độ thường.
                        <br />
                        + Khi phơi tránh ánh nắng trực tiếp.
                        <br />
                        + Nên treo sản phẩm để sản phẩm có độ bền phom dáng.
                        <br />
                        <img
                            className="w-full mt-4"
                            src="https://pos.nvncdn.com/b3bf61-16762/ps/content/20240523_GFpqjKaK.jpg"
                            alt="CANDLES ALCOHOL T-SHIRT"
                        />
                    </p>
                </div>
            </div>
            <div className=" mb-2">
                <p
                    className="dropdown dropdown-6 mb-0 cursor-pointer flex items-center"
                    onClick={toggleContent1}
                >
                    <i
                        className={`fas fa-caret-right transition-transform duration-300 ${isOpen1 ? 'rotate-90' : ''}`}
                    ></i>
                    <span className="inline-block ml-2 text-[0.9rem]">
                        Chính sách bảo hành
                    </span>
                </p>
                <div
                    className={`dropdown-menu dropdown-menu--animated dropdown-menu-6  mt-2 ${isOpen1 ? 'block' : 'hidden'}`}
                >
                    <p className="leading-normal font-sans text-black mb-1  text-[0.75rem]">
                        <span className="font-sans">
                            <span>✦</span> Đối với sản phẩm bị lỗi các chi tiết
                            trên áo khi chưa can thiệp sử dụng hay giặt tẩy,
                            Candles sẽ tiến hành kiểm tra và đổi mới sản phẩm.
                        </span>
                    </p>
                    <p className=" leading-normal font-sans text-black mb-1 text-[0.75rem]">
                        <span className="font-sans">
                            <span>✦</span> Đối với sản phẩm bị lỗi do quá trình
                            vận chuyển, Candles sẽ khắc phục tuỳ tình trạng hoặc
                            đổi mới.
                        </span>
                    </p>
                </div>
            </div>
            <div>
                <p
                    className="dropdown dropdown-6 mb-2 cursor-pointer flex items-center"
                    onClick={toggleContent2}
                >
                    <i
                        className={`fas fa-caret-right transition-transform duration-300 ${isOpen2 ? 'rotate-90' : ''}`}
                    ></i>
                    <span className="ml-2 text-[0.9rem]">
                        Chính sách đổi trả
                    </span>
                </p>
                <div
                    className={`dropdown-menu dropdown-menu--animated dropdown-menu-6  mt-2 ${isOpen2 ? 'block' : 'hidden'}`}
                >
                    <p className="leading-normal font-sans text-black mb-2 text-[0.75rem]">
                        <span className="font-sans">
                            <span>✦</span> Đổi hàng trong vòng 3 ngày với đơn
                            nội thành; 7 ngày với đơn COD (sản phẩm chưa qua sử
                            dụng và còn nguyên tag; mác).
                        </span>
                    </p>
                    <p className="leading-normal font-sans text-black mb-2 text-[0.75rem]">
                        <span className="font-sans">
                            <span>✦</span> Sản phẩm muốn đổi có giá trị bằng
                            hoặc cao hơn sản phẩm cũ (quý khách vui lòng thanh
                            toán phí ship hai chiều).
                        </span>
                    </p>
                    <p className="leading-normal font-sans text-black mb-2 text-[0.75rem]">
                        <span className="font-sans">
                            <span>✦</span> Không áp dụng đổi trả với các sản
                            phẩm sale.
                        </span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default ProductPolicy;
