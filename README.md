# ui-assessment-master

Must have: JAVA 8 SDK; PostegresSQL 12, NodeJS 16, NPM 9.

Backend technologies: Java 8, Springboot, Hibernate with MVC concept. </p>
Frontend techlogies: React and Axios with Typescript, Global paths, ECMA2021, Hooks and Responsive concepts.
---
To run:
1) Create any PostegresSQL 12 DB.
2) Remember to change the db name, user, password and port on back/notes/src/main/resources to match on your current database.
3) Before running the application, run the notesScript.sql on your db.
4) Install dependencies and run the backend (I used IntelliJ for that). "mvn clean install" should do the work.
5) Run your backend (your db should be up!).
6) If you changed the default port (8080) on your backend, open your frontend and change the port on .env to the correspondent port that you have your backend running, otherwise, you are good to go;
7) Install the frontend dependencies.
8) To run/build, use "craco" insted "run". Eg: "yarn craco start" insted the default "yarn run start" (same idea with npm).
