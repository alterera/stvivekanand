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
git add .
git commit -m "feat: added responsive navbar"
git push origin feature/task-name
```

### **4️⃣ Creating a Pull Request (PR)**
1. Go to GitHub → Open the repository.
2. Navigate to **Pull Requests** → Click **New Pull Request**.
3. Select `feature/task-name` → **Merge into `intern`**.
4. Add a description, then submit for review.


### 🔹 Best Practices for PRs
| Rules    | Description |
| -------- | ------- |
| One Task = One PR   | Don’t mix multiple features in one PR.    |
| Keep PRs Small  | Large PRs are harder to review.    |
| Write Clear Descriptions     | Helps reviewers understand changes.   |
| Address Review Comments |If changes are requested, fix them and update the PR|


### **5️⃣ Merging Into `alpha`**
- The admin will review the PR.
- If approved, it will be merged into `alpha`.
- After merged, The team then deletes the branch:
```bash
git branch -d feature/task-name
git push origin --delete feature/task-name
```

---

## **🛠 Workflow of the Admin**

### **1️⃣ Reviewing & Merging Team's  Work**
1. Check teams’s PRs before merging to `alpha`.
2. After testing, merge `alpha` → `dev`.
3. Once `dev` is stable, merge `dev` → `main`.

### **2️⃣ Keeping `team` Up-to-Date**
Team should **regularly update** their `alpha` branch to avoid conflicts:
```bash
git checkout alpha
git pull origin dev  # Merge latest code from dev to alpha
git push origin alpha
```

---

## **✅ Git Best Practices**
- **Write Clear Commit Messages** (`eg: added new button` ✅ / `update file` ❌)
- **Never Push Directly to `main` or `dev`**
- **Pull Before Working** (`git pull origin alpha`)
- **Use Feature Branches for Each Task**
- **Ask for a Review Before Merging**

---

## **🚀 Summary of Steps**
### **For Team:**
1. `git checkout alpha && git pull origin alpha`
2. `git checkout -b feature/task-name`
3. Work on the task, then `git add . && git commit -m "eg: description"`
4. `git push origin feature/task-name`
5. Open a PR → Request a review → Wait for approval.
6. After merging, delete the branch.

### **For Admin:**
1. Review team’s PRs.
2. Merge `alpha` → `dev` after checking.
3. Merge `dev` → `main` once stable.
4. Keep `alpha` updated (`git pull origin dev && git push origin alpha`).

---