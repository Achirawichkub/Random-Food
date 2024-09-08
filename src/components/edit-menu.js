// import React, { useState } from 'react';
// import { Button, Form, ListGroup } from 'react-bootstrap';

// function EditMenu() {
//   const [menu, setMenu] = useState(['ข้าวผัด', 'ก๋วยเตี๋ยว', 'ส้มตำ']); // รายการเมนูเริ่มต้น
//   const [newMenuItem, setNewMenuItem] = useState(''); // สำหรับเก็บข้อมูลเมนูที่กำลังจะเพิ่ม

//   // ฟังก์ชันสำหรับเพิ่มเมนูใหม่
//   const handleAddMenuItem = () => {
//     if (newMenuItem.trim() !== '') {
//       setMenu([...menu, newMenuItem]);
//       setNewMenuItem(''); // ล้างข้อมูลที่พิมพ์ในช่อง input หลังเพิ่มเสร็จ
//     }
//   };

//   // ฟังก์ชันสำหรับลบเมนู
//   const handleDeleteMenuItem = (index) => {
//     const updatedMenu = menu.filter((_, i) => i !== index); // ลบเมนูที่เลือกออกจาก array
//     setMenu(updatedMenu);
//   };

//   return (
//     <div>
//       <h1>แก้ไขเมนูอาหาร</h1>
//       <Form.Group>
//         <Form.Label>เพิ่มเมนูใหม่</Form.Label>
//         <Form.Control 
//           type="text" 
//           placeholder="กรอกชื่อเมนู" 
//           value={newMenuItem}
//           onChange={(e) => setNewMenuItem(e.target.value)} // อัปเดตค่าที่พิมพ์ใน input
//         />
//         <Button onClick={handleAddMenuItem} variant="primary" className="mt-2">เพิ่มเมนู</Button>
//       </Form.Group>

//       <h3 className="mt-4">รายการเมนูปัจจุบัน</h3>
//       <ListGroup>
//         {menu.map((item, index) => (
//           <ListGroup.Item key={index}>
//             {item}
//             <Button 
//               variant="danger" 
//               size="sm" 
//               className="float-end" 
//               onClick={() => handleDeleteMenuItem(index)}
//             >
//               ลบ
//             </Button>
//           </ListGroup.Item>
//         ))}
//       </ListGroup>
//     </div>
//   );
// }

// export default EditMenu;
import React, { useState } from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';

function EditMenu({ menu, updateMenu }) { // รับ props เมนูและฟังก์ชันอัปเดตเมนู
  const [newMenuItem, setNewMenuItem] = useState('');

  // ฟังก์ชันสำหรับเพิ่มเมนูใหม่
  const handleAddMenuItem = () => {
    if (newMenuItem.trim() !== '') {
      const updatedMenu = [...menu, newMenuItem];
      updateMenu(updatedMenu); // เรียกฟังก์ชันอัปเดตเมนูจาก props
      setNewMenuItem(''); // ล้าง input หลังจากเพิ่มเมนูแล้ว
    }
  };

  // ฟังก์ชันสำหรับลบเมนู
  const handleDeleteMenuItem = (index) => {
    const updatedMenu = menu.filter((_, i) => i !== index);
    updateMenu(updatedMenu); // อัปเดตเมนูเมื่อมีการลบ
  };

  return (
    <div>
      <h1>แก้ไขเมนูอาหาร</h1>
      <Form.Group>
        <Form.Label>เพิ่มเมนูใหม่</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="กรอกชื่อเมนู" 
          value={newMenuItem}
          onChange={(e) => setNewMenuItem(e.target.value)}
        />
        <Button onClick={handleAddMenuItem} variant="primary" className="mt-2">เพิ่มเมนู</Button>
      </Form.Group>

      <h3 className="mt-4">รายการเมนูปัจจุบัน</h3>
      <ListGroup>
        {menu.map((item, index) => (
          <ListGroup.Item key={index}>
            {item}
            <Button 
              variant="danger" 
              size="sm" 
              className="float-end" 
              onClick={() => handleDeleteMenuItem(index)}
            >
              ลบ
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default EditMenu;

