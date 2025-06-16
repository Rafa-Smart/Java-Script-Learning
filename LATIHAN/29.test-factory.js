// jadi factory itu adlah sebuah function yang mereturn function lain, mirip kayak closure


function createApplication() {
  // 1. Membuat objek app dasar
  const app = function(req, res, next) {
    app.handle(req, res, next); // app bisa dipanggil sebagai fungsi
  };
  
  // 2. Mixin properti dan metode dari berbagai sumber
  Object.assign(app, eventEmitterMethods); // Event emitter
  Object.assign(app, routerMethods); // Router
  Object.assign(app, middlewareMethods); // Middleware
  
  // 3. Inisialisasi properti internal
  app.settings = {};
  app.locals = {};
  
  return app;
}

// Contoh metode yang ditambahkan
const routerMethods = {
  get: function(path, handler) {
    // implementasi routing
  },
  post: function(path, handler) {
    // implementasi routing
  }
};

// jadi yang asalnya adalah function mejadi objek

// contoh lain 
function createCounter(start = 0, step = 1) {
  let count = start;
  
  return function() {
    const current = count;
    count += step;
    return current;
  };
}

const counter1 = createCounter(); // mulai dari 0, increment 1
const counter2 = createCounter(10, 5); // mulai dari 10, increment 5

console.log(counter1()); // 0
console.log(counter1()); // 1
console.log(counter2()); // 10
console.log(counter2()); // 15