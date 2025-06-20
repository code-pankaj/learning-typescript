# 🚀 TypeScript Notes

A fast-track guide for mastering TypeScript in web development.

---

## 📊 Types & Inference

```typescript
let name: string = "Pankaj"; // 🔒 Explicit Typing
let age = 19;                // ✨ Implicit Typing
```

> TypeScript automatically infers variable types from assigned values.

```typescript
export {};  // 🛡️ Prevents global scope pollution
```

## 🛠️ Functions

```typescript
function add(num: number): number {
    return num + 5;
}
```

> Return type follows parameter list with `:number` notation

## 📋 Objects & Type Aliases

```typescript
type User = {
    name: string;
    age: number;
    email: string;
};

function createUser(user: User) {}
```

## 🔐 Readonly & Optional Properties

```typescript
type User = {
    readonly _id: string;      // 🔒 Cannot be modified
    name: string;
    email: string;
    isActive: boolean;
    creditCardNumber?: number; // ❓ Optional field
};
```

## 📚 Arrays

```typescript
let superheroes: string[] = ["thor", "ironman"];
let heroPower: Array<string> = ["lightning", "intelligence"];
```

## 🔀 Union Types

```typescript
let score: number | string = 33; // Can be either number or string
```

## 📏 Tuples

```typescript
let user: [string, number] = ["Pankaj", 20]; // Fixed length & types
```

## 🧭 Enums

```typescript
enum Role {
    ADMIN,  // 0
    USER,   // 1
    GUEST   // 2
}
```

## 🧩 Interfaces

```typescript
interface User {
    name: string;
    email: string;
}
```

> Interfaces can be reopened and extended, unlike type aliases

## 🏗️ Classes

```typescript
class User {
    email: string;
    name: string;

    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }
}

const newUser = new User("pankaj@gmail.com", "Pankaj");
```

## 🔄 Interface vs Type vs Class

```typescript
// Interface: Can be extended, merged, implemented
interface User {
    name: string;
}
interface User {
    age: number; // Merging declarations
}

// Type: Cannot be reopened but supports unions/intersections
type Animal = {
    species: string;
}
type Bear = Animal & { honey: boolean }; // Intersection

// Class: Creates instances, can implement interfaces
class Employee implements User {
    name: string = "";
    age: number = 0;
    salary: number = 0; // Additional properties
}
```

## 🧱 Abstract Classes

```typescript
abstract class Shape {
    color: string;
    
    constructor(color: string) {
        this.color = color;
    }
    
    // Must be implemented by derived classes
    abstract calculateArea(): number;
    
    // Shared method with implementation
    displayColor(): void {
        console.log(`This shape is ${this.color}`);
    }
}

class Circle extends Shape {
    radius: number;
    
    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }
    
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
```

## 🧬 Generics

```typescript
function identity<Type>(arg: Type): Type {
    return arg;
}
```

> Safer than `any` - maintains type safety through the function

## 🎯 Narrowing

```typescript
function padLeft(padding: number | string, input: string) {
    // Type narrowing with typeof
    if (typeof padding === "number") {
        return " ".repeat(padding) + input; // padding is number here
    }
    return padding + input; // padding is string here
}
```

## 🔍 Type Guards

```typescript
if (value instanceof Date) { /* ... */ }
```

## ✅ Type Predicates

```typescript
function isString(value: any): value is string {
    return typeof value === "string";
}
```

## ⚔️ Discriminated Unions

```typescript
type Circle = {
    kind: "circle";
    radius: number;
}

type Square = {
    kind: "square"; 
    sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2; // TypeScript knows shape is Circle
        case "square":
            return shape.sideLength ** 2;      // TypeScript knows shape is Square
    }
}
```
