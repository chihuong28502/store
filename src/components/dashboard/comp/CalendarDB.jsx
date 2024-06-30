/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

const CalendarDB = () => {
    // Các tên tháng và ngày trong tuần
    const MONTH_NAMES = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // State để lưu trữ các thông tin về lịch và modal
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth());
    const [openEventModal, setOpenEventModal] = useState(false);
    const [event_title, setEventTitle] = useState('');
    const [event_date, setEventDate] = useState('');
    const [event_theme, setEventTheme] = useState('blue');
    const [events, setEvents] = useState([
        {
            event_title: 'Example Event',
            event_date: '2024-06-28',
            event_theme: 'blue',
        },
        {
            event_title: 'Example Event',
            event_date: '2024-06-29',
            event_theme: 'blue',
        },
    ]);

    // State để lưu trữ ngày trống đầu tháng và số ngày trong tháng
    const [blankdays, setBlankdays] = useState([]);
    const [no_of_days, setNoOfDays] = useState([]);

    // Effect để khởi tạo ngày và lấy số ngày trong tháng
    useEffect(() => {
        getNoOfDays();
    }, [month, year]);

    // Hàm để khởi tạo tháng
    const initDate = () => {
        setYear(new Date().getFullYear());
        setMonth(new Date().getMonth());
    };

    // Hàm để lấy số ngày trong tháng và các ngày trống đầu tháng
    const getNoOfDays = () => {
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();
        const blankdaysArray = [];
        for (let i = 1; i <= firstDay; i++) {
            blankdaysArray.push(i);
        }
        const daysArray = [];
        for (let i = 1; i <= daysInMonth; i++) {
            daysArray.push(i);
        }
        setBlankdays(blankdaysArray);
        setNoOfDays(daysArray);
    };

    // Hàm kiểm tra xem một ngày có phải là ngày hiện tại không
    const isToday = (date) => {
        const today = new Date();
        return (
            today.getDate() === date &&
            today.getMonth() === month &&
            today.getFullYear() === year
        );
    };

    // Hàm hiển thị modal để thêm sự kiện
    const showEventModal = (date) => {
        setOpenEventModal(true);
        setEventDate(new Date(year, month, date).toISOString().slice(0, 10));
    };

    // Hàm để thêm sự kiện mới
    const addEvent = () => {
        const newEvent = { event_title, event_date, event_theme };
        setEvents([...events, newEvent]);
        setOpenEventModal(false);
        setEventTitle('');
        setEventDate('');
        setEventTheme('blue');
    };

    return (
        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
            {/* Phần nội dung chính của trang */}
            <main className="w-full flex-grow p-6">
                <h1 className="text-3xl text-black pb-6">Calendar</h1>

                <div className="w-full">
                    {/* Phần lịch */}
                    <div className="antialiased sans-serif bg-gray-100">
                        <div className="container py-2">
                            <div className="bg-white rounded-lg shadow overflow-hidden">
                                <div className="flex items-center justify-between py-2 px-6">
                                    {/* Hiển thị tháng và năm */}
                                    <div>
                                        <span className="text-lg font-bold text-gray-800">
                                            {MONTH_NAMES[month]}
                                        </span>
                                        <span className="ml-1 text-lg text-gray-600 font-normal">
                                            {year}
                                        </span>
                                    </div>
                                    {/* Các nút điều hướng tháng */}
                                    <div
                                        className="border rounded-lg px-1"
                                        style={{ paddingTop: '2px' }}
                                    >
                                        <button
                                            type="button"
                                            className={`leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center ${month === 0 ? 'cursor-not-allowed opacity-25' : ''}`}
                                            disabled={month === 0}
                                            onClick={() => {
                                                setMonth(month - 1);
                                            }}
                                        >
                                            <svg
                                                className="h-6 w-6 text-gray-500 inline-flex leading-none"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M15 19l-7-7 7-7"
                                                />
                                            </svg>
                                        </button>
                                        <div className="border-r inline-flex h-6"></div>
                                        <button
                                            type="button"
                                            className={`leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1 ${month === 11 ? 'cursor-not-allowed opacity-25' : ''}`}
                                            disabled={month === 11}
                                            onClick={() => {
                                                setMonth(month + 1);
                                            }}
                                        >
                                            <svg
                                                className="h-6 w-6 text-gray-500 inline-flex leading-none"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Hiển thị các ngày trong tuần */}
                                <div className="-mx-1 -mb-1">
                                    <div className="flex flex-wrap">
                                        {DAYS.map((day, index) => (
                                            <div
                                                key={index}
                                                style={{ width: '14.26%' }}
                                                className="px-2 py-2"
                                            >
                                                <div className="text-gray-600 text-sm uppercase tracking-wide font-bold text-center">
                                                    {day}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Hiển thị các ô ngày trong lịch */}
                                    <div className="flex flex-wrap border-t border-l">
                                        {/* Các ngày trống đầu tháng */}
                                        {blankdays.map((blankday, index) => (
                                            <div
                                                key={index}
                                                style={{
                                                    width: '14.28%',
                                                    height: '120px',
                                                }}
                                                className="text-center border-r border-b px-4 pt-2"
                                            ></div>
                                        ))}
                                        {/* Các ngày có sự kiện */}
                                        {no_of_days.map((date, dateIndex) => (
                                            <div
                                                key={dateIndex}
                                                style={{
                                                    width: '14.28%',
                                                    height: '120px',
                                                }}
                                                className="px-4 pt-2 border-r border-b relative"
                                            >
                                                <div
                                                    onClick={() =>
                                                        showEventModal(date)
                                                    }
                                                    className={`inline-flex w-6 h-6 items-center justify-center cursor-pointer text-center leading-none rounded-full transition ease-in-out duration-100 ${isToday(date) ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-blue-200'}`}
                                                >
                                                    {date}
                                                </div>
                                                {/* Hiển thị danh sách các sự kiện trong ngày */}
                                                <div
                                                    style={{ height: '80px' }}
                                                    className="overflow-y-auto mt-1"
                                                >
                                                    {events
                                                        .filter(
                                                            (e) =>
                                                                new Date(
                                                                    e.event_date,
                                                                ).toDateString() ===
                                                                new Date(
                                                                    year,
                                                                    month,
                                                                    date,
                                                                ).toDateString(),
                                                        )
                                                        .map((event, index) => (
                                                            <div
                                                                key={index}
                                                                className={`px-2 py-1 rounded-lg mt-1 overflow-hidden border ${event.event_theme === 'blue' ? 'border-blue-200 text-blue-800 bg-blue-100' : ''} ${event.event_theme === 'red' ? 'border-red-200 text-red-800 bg-red-100' : ''} ${event.event_theme === 'yellow' ? 'border-yellow-200 text-yellow-800 bg-yellow-100' : ''} ${event.event_theme === 'green' ? 'border-green-200 text-green-800 bg-green-100' : ''} ${event.event_theme === 'purple' ? 'border-purple-200 text-purple-800 bg-purple-100' : ''}`}
                                                            >
                                                                <p className="text-sm truncate leading-tight">
                                                                    {
                                                                        event.event_title
                                                                    }
                                                                </p>
                                                            </div>
                                                        ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal thêm sự kiện */}
                        {openEventModal && (
                            <div className="fixed z-40 top-0 right-0 left-0 bottom-0 h-full w-full bg-black bg-opacity-75 flex justify-center items-center">
                                <div className="max-w-xl mx-auto bg-white rounded-lg overflow-hidden">
                                    <div className="flex justify-between items-center p-4 border-b">
                                        <h2 className="font-bold text-2xl text-gray-800">
                                            Add Event Details
                                        </h2>
                                        <button
                                            className="text-gray-500 hover:text-gray-800 focus:outline-none"
                                            onClick={() =>
                                                setOpenEventModal(false)
                                            }
                                        >
                                            <svg
                                                className="h-6 w-6"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="p-8">
                                        {/* Form nhập thông tin sự kiện */}
                                        <div className="mb-4">
                                            <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">
                                                Event title
                                            </label>
                                            <input
                                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                                type="text"
                                                value={event_title}
                                                onChange={(e) =>
                                                    setEventTitle(
                                                        e.target.value,
                                                    )
                                                }
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">
                                                Event date
                                            </label>
                                            <input
                                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                                                type="text"
                                                value={event_date}
                                                onChange={(e) =>
                                                    setEventDate(e.target.value)
                                                }
                                            />
                                        </div>

                                        <div className="inline-block w-64 mb-4">
                                            <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">
                                                Select a theme
                                            </label>
                                            <div className="relative">
                                                <select
                                                    className="block appearance-none w-full bg-gray-200 border-2 border-gray-200 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500 text-gray-700"
                                                    value={event_theme}
                                                    onChange={(e) =>
                                                        setEventTheme(
                                                            e.target.value,
                                                        )
                                                    }
                                                >
                                                    <option value="blue">
                                                        Blue
                                                    </option>
                                                    <option value="red">
                                                        Red
                                                    </option>
                                                    <option value="yellow">
                                                        Yellow
                                                    </option>
                                                    <option value="green">
                                                        Green
                                                    </option>
                                                    <option value="purple">
                                                        Purple
                                                    </option>
                                                </select>
                                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                    <svg
                                                        className="fill-current h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-8 text-right">
                                            <button
                                                type="button"
                                                className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-lg shadow-sm mr-2"
                                                onClick={() =>
                                                    setOpenEventModal(false)
                                                }
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="button"
                                                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded-lg shadow-sm"
                                                onClick={addEvent}
                                            >
                                                Save Event
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CalendarDB;
