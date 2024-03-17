# การสืบทอดคุณสมบัติ (Inheritance)

คือ ทำการสร้างสิ่งใหม่ขึ้นด้วยการสืบทอด หรือรับเอา (inherit) คุณสมบัติบางอย่างมากจากสิ่งเดิมที่มีอยู่แล้ว \
ข้อดีของการ inheritance คือ สามารถนำสิ่งที่เราเคยสร้างขึ้นแล้ว
นำกลับมาใช้ใหม่ (re-use) ได้ ทำให้ช่วยประหยัดเวลาการทำงานลง เนื่องจากไม่ต้องเสียเวลาพัฒนาใหม่หมด

# คลาสแม่ (Superclass) คลาสลูก (Subclass)

SuperClass -> SubClass \
User -> Teacher \
User -> Student \

```js
class User {

}

class Teacher extends User {

}
```

# Super
เป็นคำสั่งสำหรับเรียกใช้งานเมื่อต้องการคุณสมบัติต่าง ๆ 
ที่ทำงานอยู่ใน Class แม่ เช่น Constructor เป็นต้น

```js
class User {
    constructor(username, password) {
        
    }
}

class Teacher extends User {
    constructor() {
        let username = 'default'
        let password = 'default'
        super(username, password) // Constructor ของ Class แม่
    }
}

class Student extends User {
    constructor() {
        let username = 'default'
        let password = 'default'
        super(username, password) // Constructor ของ Class แม่
    }
}
```