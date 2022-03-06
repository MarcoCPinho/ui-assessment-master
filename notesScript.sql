CREATE TABLE IF NOT EXISTS "notes" (
	"id_note" INTEGER NOT NULL,
	"id_user" INTEGER NULL DEFAULT NULL,
	"name" VARCHAR(60) NULL DEFAULT 'NULL::character varying',
	"value" TEXT NULL DEFAULT NULL,
	PRIMARY KEY ("id_note"),
	CONSTRAINT "48711c5c3dede886f91064c568d4620d" FOREIGN KEY ("id_user") REFERENCES "public"."users" ("id_user") ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS "users" (
	"id_user" INTEGER NOT NULL,
	"name" VARCHAR(60) NULL DEFAULT 'NULL::character varying',
	"email" VARCHAR(60) NULL DEFAULT 'NULL::character varying',
	"password" VARCHAR(60) NULL DEFAULT 'NULL::character varying',
	PRIMARY KEY ("id_user"),
	UNIQUE INDEX "email" ("email")
);

CREATE SEQUENCE IF NOT EXISTS note_sequence;
CREATE SEQUENCE IF NOT EXISTS user_sequence;
