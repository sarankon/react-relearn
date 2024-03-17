# การพ้องรูป (Polymorphism)

การพ้องรูป คือ ความสามารถในการตอบสนองต่อสิ่งเดียวกันด้วยวิธีการที่แตงต่างกัน
กล่าวคือวัตถุนั้นสามารถกำหนดกระบวนการทำงานได้หลายรูปแบบ
โดยเพิ่มเติมกระบวนการทำงานจากสิ่งเดิมที่มีอยู่แล้ว \
ข้อดีคือทำให้โปรแกรมสามารถปรับเปลี่ยนหรือเพิ่มเติมการทำงานได้ง่ายขึ้น

- Overriding Method
คือ Method ของ Class ลูก ที่มีชื่อเหมือนกับ Mehtod ของ Class แม่ \
(เป็นผลมาจากคุณสมบัติ OOP คือ Inheritance) 
แต่มีกระบวนการทำงานด้านในแตกต่างกัน

- Overload Method
คือ Method ชื่อเดียวกัน แต่ทำงานแตกต่างกันขึ้นอยู่กับ Parameter ที่ส่งมา

```js
class User {
    username
    password

    constructor(username, password) {
        
    }

    getName() {
        return this.username
    }
}

class Teacher extends User {

    // Override
    constructor() {
        let username = 'default'
        let password = 'default'
        super(username, password) // Constructor ของ Class แม่
    }

    getName() {
        return 'Teacher: ' + this.username
    }
}

class Student extends User {

    // Override
    constructor() {
        let username = 'default'
        let password = 'default'
        super(username, password) // Constructor ของ Class แม่
    }

    // Overload
    getName() {
        return 'Student: ' + this.username
    }

    getName(name) {
        return 'Student: ' + this.username + name
    }
}
```