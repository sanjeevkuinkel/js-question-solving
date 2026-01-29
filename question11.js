let obj1 = {
  name: "Sanjeev",
  address: {
    city: "Kathmandu"
  }
};

let obj2 = obj1; // ❌ reference copy
obj2.address.city = "Pokhara";
console.log(obj1.address.city); // "Pokhara" 😱

// Why?

// Both objects point to the same memory

let obj2 = structuredClone(obj1);


// Shallow clone (still NOT deep)

let obj2 = { ...obj1 };
// /Looks safe ❌ but not fully.
obj2.address.city = "Pokhara";
console.log(obj1.address.city); // "Pokhara"


// Why?

// Spread copies only top-level

// Nested objects still share reference


// Deep clone (real solution)
let obj2 = structuredClone(obj1);

obj2.address.city = "Pokhara";
console.log(obj1.address.city); // "Kathmandu" ✅

//No shared reference 🎉

