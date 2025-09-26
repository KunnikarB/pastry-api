# Pastry API 🍰

A simple **CRUD API** for managing pastries built with **Express**, **TypeScript**, and **Zod** for validation.  

---

## Features 🔥

- List all pastries (`GET /pastries`)  
- Add a new pastry (`POST /pastries`)  
- Update an existing pastry (`PUT /pastries/:id`)  
- Delete a pastry (`DELETE /pastries/:id`)  
- Type-safe request validation using Zod  

---

## Tech Stack 🛠️

- Node.js + Express  
- TypeScript  
- Zod for schema validation  
- Nodemon for development auto-reload  

---
## API Endpoints 🚀
#### GET /pastries (Get all pastries)
<img width="823" height="783" alt="GET" src="https://github.com/user-attachments/assets/12b1f64e-f59b-417c-bcde-6990ca6b21ef" />

#### POST /pastries (Add a new pastry)
<img width="965" height="604" alt="POST" src="https://github.com/user-attachments/assets/13b756c8-b9a8-4567-aaa7-90df04d8b5c9" />
Added a new pastry
  <img width="1297" height="977" alt="GET-ALL-update" src="https://github.com/user-attachments/assets/f194f70a-8a1f-4cc4-b53b-d27fcea43b76" />

#### PUT /pastries/:id (Update a pastry partially or fully)

<img width="819" height="509" alt="PUT-update" src="https://github.com/user-attachments/assets/d1bd2844-a4e5-475b-8417-52dabfd9cd97" />

#### DELETE /pastries/:id (Delete a pastry by ID)
<img width="938" height="653" alt="DELETE" src="https://github.com/user-attachments/assets/4624455d-b51c-4f64-b370-aafcd04a7049" />

---
## Zod ✅
#### Zod handles request validation and returns clear error messages for invalid input

<img width="819" height="353" alt="Zod-error1" src="https://github.com/user-attachments/assets/8c947f5a-f3ed-4988-9ef1-8c7ef1b1da2b" />
<img width="819" height="356" alt="Zod-error2" src="https://github.com/user-attachments/assets/8c696f9b-ac19-4505-bdb5-1189ecb8dbe1" />
<img width="819" height="368" alt="Zod-error4" src="https://github.com/user-attachments/assets/e6944f5c-3042-4eb3-97cd-2d4cf845d8cb" />
<img width="820" height="383" alt="Zod-error3" src="https://github.com/user-attachments/assets/734f2bdf-e3f5-470a-8bc2-cec20917a544" />

---
## Installation 👩🏻‍💻

 Clone the repository and running the Server:

```bash
git clone https://github.com/KunnikarB/pastry-api.git

npm install

npm run dev

