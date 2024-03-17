# การสร้าง Class
```js
// การสร้าง Class

class ClassName {
    // Property
    // Method
}

// การสร้าง Object

let objectName1 = new ClassName()
const objectName2 = new ClassName()
```

# กฎการตั้งชื่อ
1. ชื่อ Class ควรกำหนดให้ตัวอักษรตัวแรกเป้นตัวพิมพ์ใหญ่ที่เหลือเป็นพิมพ์เล็ก เช่น MyClass, User เป็นต้น
2. ชื่อ Object กำหนดเป็นตัวพิมพ์เล็กทั้งหมด
3. Property กำหนดเป็นตัวพิมพ์เล็ก เช่น name, age เป็นต้น

# Constructor
เป็นฟังก์ชั่นพิเศษที่จะถูกเรียกใช้งาน เมื่อสร้างวัตถุขึ้นมาและจะทำงานอัตโนมัติในตอนเริ่มต้นเพียงครั้งเดียว
- Default Constructor คือ Constructor เริ่มต้นที่มีอยู่ในทุกคลาส
- Prameterized Constructor คือ Constructor ที่สามารถส่งค่าพารามิเตอร์เข้าไปทำงานได้

โครงสร้าง Constructor
```js
class ClassName {
    constructor([parameter]) {

    }
}
```

# คีย์เวิร์ด this
การใช้คีย์เวิร์ด this จะเป็นตัวชี้หรือตัวบ่งบอกว่าตอนนี้เราทำงานกับวัตถุใด
ให้บอกตัวต้นของวัตถุนั้น ๆ เช่น การทำหนดคุณสมบัติต่าง ๆ ในวัตถุ เป็นต้น

# การสร้าง Method
การสร้าง Method ในคลาสจะคล้ายหลักการสร้างฟังก์ชั่นใน JavaScript แต่มีลักษณะสำคัญ คือ
- ระบุแค่ชื่อ Method แต่ไม่มีคำว่า function นำหน้า
- สามารถกำหนด Parameter ได้ เหมือนกับฟังก์ชั่น
- อ้างอิง Property หรือ Method เดียวกันภายใน Class โดยใช้ Keyword this

การเรียกใช้งาน
- เรียกใช้งานภายใน Class \
this.methodName()
- เรียกใช้งานภายนอก Class \
objectName.methodName()





