# Migration `20200113001232-update-schemas`

This migration has been generated at 1/13/2020, 12:12:32 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Pet" (
  "age" text    ,
  "breed" text    ,
  "color" text    ,
  "createdAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00' ,
  "id" text  NOT NULL  ,
  "name" text    ,
  "owner" text    REFERENCES "public"."User"("id") ON DELETE SET NULL,
  "published" boolean  NOT NULL DEFAULT false ,
  "updatedAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00' ,
  PRIMARY KEY ("id")
);

ALTER TABLE "public"."User" DROP COLUMN "name",
ADD COLUMN "firstName" text    ,
ADD COLUMN "lastName" text    ,
DROP COLUMN "email",
ADD COLUMN "email" text    ,
DROP COLUMN "phoneNumber",
ADD COLUMN "phoneNumber" text    ;

DROP TABLE "public"."Post";
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200112233503-add-phone-number-to-user..20200113001232-update-schemas
--- datamodel.dml
+++ datamodel.dml
@@ -3,27 +3,30 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url      = "postgresql://devadmin:LeFdNnVS6qd3CbrJ@petmate-dev.czfxbljrxznh.us-east-1.rds.amazonaws.com:5432/petmate-dev"
 }
-model Post {
+model Pet {
   id        String   @default(cuid()) @id
   createdAt DateTime @default(now())
   updatedAt DateTime @updatedAt
   published Boolean  @default(false)
-  title     String
-  content   String?
-  author    User?
+  name      String?
+  age       String?
+  color     String?
+  breed     String?
+  owner     User?
 }
 model User {
-  id       String  @default(cuid()) @id
-  createdAt DateTime @default(now())
-  updatedAt DateTime @updatedAt
-  email    String  @unique
-  phoneNumber String @unique
-  password String
-  name     String?
-  posts    Post[]
+  id          String  @default(cuid()) @id
+  createdAt   DateTime @default(now())
+  updatedAt   DateTime @updatedAt
+  email       String?  @unique
+  phoneNumber String? @unique
+  firstName   String?
+  lastName    String?
+  password    String
+  pets        Pet[]
 }
```


