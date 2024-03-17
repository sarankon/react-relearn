# การห่อหุ้ม (Enscapsulation)
- เป็นกระบวนการซ่อนรายละเอียดการทำงานและข้อมูลไว้ภายใน 
ไม่ให้ภายนอกสามารถมองเห็นและเปลี่ยนแปลงแก้ไขข้อมูลภายในได้ 
ซึ่งเป็นผลทำให้เกิดความเสียหายแก่ข้อมูล

- สามารถสร้างความปลอดภัยให้แก่ข้อมูลได้ 
เนื่องจากข้อมูลถูกเข้าถึงจากผู้มีสิทธิ์เท่านั้น

# Access Modifier
คือ ระดับในการเข้าถึง Class, Property, Method และอื่น ๆ
ในภาษาเชิงวัตถุ มีประโยชน์อย่างมากในเรื่องของการกำหนดสิทธิในการเข้าใช้งาน
การซ่อนข้อมูล และอื่น ๆ

- Public เป็นการประกาศระดับในรูปแบบสาธารณะหรือกล่าวได้ว่าใคร ๆ ก็สามารถเข้าถึงได้
- Protected เป็นการประกาศระดับการเข้าถึงที่เกี่ยวข้องกับเรื่องการสืบทอด (Inheritance)
ทำให้คลาสนั้น ๆ สามารถเรียกใช้งานสมาชิกของคลาสที่ถูกกำหนดเป็น Protected ได้ (เครื่องหมาย _)
- Private เป็นการประกาษระดับการเข้าถึงที่เข้มงวดที่สุด กล่าวคือ
จะมีแต่คลาสของตัวมันเองเท่านั้นที่มีสิทธิ์ใช้งานได้ (เครื่องหมาย #)

```js
class ClassName {
    publicProperty
    _protectedProperty
    #privateProperty
}
```

# Getter, Setter
คือการกำหนด Method เพื่อเข้าถึง Property ใน Object
```js
class ClassName {
    #privateProperty

    getProperty() {
        return this.#privateProperty
    }

    setProperty(value) {
        this.#privateProperty = value
    }

}
```

# Accessor
คำสั่งที่ช่วยให้สามารถจัดการ Property ได้ง่ายมากยิ่งขึ้น 
โดยสามารถกำหนดได้ว่าต้องการอยากทำงานกับ Property ใด
โดยมีองค์ประกอบ 2 ส่วน คือ
1. Get คือ ตัวช่วยสำหรับเรียกดูข้อมูลใน property
2. Set คือ ตัวช่วยสำหรับกำหนดหรือเขียนข้อมูลใน property

```js
class ClassName {
    #privateProperty

    get Property() {
        return this.#privateProperty
    }

    set Property(value) {
        this.#privateProperty = value
    }

}

// กำหนดค่า
ObjectName.Property = 'Value'

// เรียกดูค่า
ObjectName.Property
```

# Static Property
คือ Property ที่สามารถเรียกใช้งานได้โดยตรง ไม่ต้องเรียกผ่าน Object
การสร้าง Static Property จะเหมือนกับการสร้าง Property โดยทั่วไป
เพียงแค่เติมคำว่า static นำหน้า Property
```js
// โครงสร้างคำสั่ง
static property = value

// การเรียกใช้งาน
className.property
```

# Static Method
คือ Method ที่สามารถเรียกใช้งานได้โดยตรง ไม่ต้องเรียกผ่าน Object 
การสร้าง Static Method จะเหมือนกับการสร้าง Method โดยทั่วไปเพียงแค่เติม static นำหน้า

```js
// โครงสร้าง
static methodName(parameter) {
    // statement
}

// การเรียกใช้งาน
className.method
```