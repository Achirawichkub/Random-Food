// import React, { useState, useEffect } from 'react';
// import { Button } from "react-bootstrap";
// import Swal from 'sweetalert2';

// function Spin() {
//   const [text, setText] = useState('กินอะไรดี');
//   const [randomNumber, setRandomNumber] = useState(null);

//   const handleSpin = () => {
//     let dots = 0;
//     setText('กำลังสุ่ม'); // ตั้งค่าเริ่มต้นของข้อความ
//     const interval = setInterval(() => {
//       dots = (dots + 1) % 4; // เพิ่มจุดทีละจุด (วนกลับเมื่อครบ 3 จุด)
//       setText('กำลังสุ่ม' + '.'.repeat(dots)); // เพิ่มจุดในข้อความ
//     }, 500); // เปลี่ยนจุดทุกๆ 0.5 วินาที

//     setTimeout(() => {
//       clearInterval(interval); // หยุดการเพิ่มจุดเมื่อครบเวลา
//       const number = Math.floor(Math.random() * 10) + 1; // สุ่มตัวเลข 1-10
//       setRandomNumber(number);
//       Swal.fire({
//         title: `เลขที่สุ่มได้คือ ${number}`, // แสดงผลลัพธ์ตัวเลข
//         icon: 'success', // ใช้ไอคอน success
//       });
//       setText('กินอะไรดี'); // ตั้งค่าเริ่มต้นของข้อความใหม่หลังจากสุ่มเสร็จ
//     }, 3000); // ดีเลย์ 3 วินาที
//   };

//   return (
//     <div>
//       <div>
//         <h1>{text}</h1> {/* แสดงข้อความที่เปลี่ยนแปลงตามสถานะ */}
//         <Button onClick={handleSpin} size='sm' variant="info">สุ่มเลย</Button>
//         <Button variant='secondary' size='sm'>แก้ไขเมนู</Button>
//       </div>
//     </div>
//   );
// }

// export default Spin;
import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import Swal from 'sweetalert2';

function Spin({ menu }) { // รับ props เมนูจาก App
  const [text, setText] = useState('กินอะไรดี');

  const handleSpin = () => {
    if (menu.length === 0) {
      Swal.fire({
        title: 'ไม่มีเมนูในระบบ',
        icon: 'warning',
      });
      return;
    }

    let dots = 0;
    setText('กำลังสุ่ม');
    const interval = setInterval(() => {
      dots = (dots + 1) % 4;
      setText('กำลังสุ่ม' + '.'.repeat(dots));
    }, 500);

    setTimeout(() => {
      clearInterval(interval);
      const randomIndex = Math.floor(Math.random() * menu.length); // สุ่มเมนูจาก props menu
      const randomMenu = menu[randomIndex];
      Swal.fire({
        title: `เมนูที่สุ่มได้คือ ${randomMenu}`,
        icon: 'success',
      });
      setText('กินอะไรดี');
    }, 3000);
  };

  return (
    <div>
      <div>
        <h1>{text}</h1>
        <Button onClick={handleSpin} size='sm' variant="info">สุ่มเลย</Button>
      </div>
    </div>
  );
}

export default Spin;
