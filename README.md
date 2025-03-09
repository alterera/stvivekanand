# GitHub Workflow Documentation

## **📌 Overview**
This document outlines the **GitHub workflow** for **Alterera Networks Pvt. Ltd**, ensuring a structured development process. It applies to both the **admin** and the **team**.

---

## **📁 Branching Strategy**
### **1. Main Branches**
- **`main`** → Production-ready code. Only tested and approved features go here.
- **`dev`** → Active development branch. Features are merged here before going to `main`.
- **`alpha`** → Alpha code workspace. All tasks are pushed here first.

### **2. Feature Branches (For Each Task)**
Team should create a new feature branch from `alpha` for every task:
```
feature/alpha-task-name
```
🔹 Example: `feature/add-navbar`

---

## **💼 Workflow for the Team**

### **1️⃣ Cloning the Repository**
Before starting, clone the repository:
```bash
git clone https://github.com/Alterera/Vivekanand-School.git

cd Vivekanand-School

git checkout alpha  # Switch to alpha branch

```
To fetch latest codebase, run
```bash
git pull origin alpha
```

### **2️⃣ Creating a Feature Branch**
Each task must have its own branch:
```bash
git checkout -b feature/task-name
```
🔹 Example: `feature/fix-footer`

### **3️⃣ Committing & Pushing Changes**
After working on the task, add and commit changes:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
