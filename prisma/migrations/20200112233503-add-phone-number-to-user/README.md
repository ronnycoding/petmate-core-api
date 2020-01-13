# Migration `20200112233503-add-phone-number-to-user`

This migration has been generated at 1/12/2020, 11:35:03 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."User" ADD COLUMN "phoneNumber" text  NOT NULL DEFAULT '' ;

CREATE UNIQUE INDEX "User.phoneNumber" ON "public"."User"("phoneNumber")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200112220853-add-timestamps-fields-to-post-and-user-object..20200112233503-add-phone-number-to-user
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url      = "postgresql://devadmin:LeFdNnVS6qd3CbrJ@petmate-dev.czfxbljrxznh.us-east-1.rds.amazonaws.com:5432/petmate-dev"
 }
 model Post {
   id        String   @default(cuid()) @id
@@ -21,8 +21,9 @@
   id       String  @default(cuid()) @id
   createdAt DateTime @default(now())
   updatedAt DateTime @updatedAt
   email    String  @unique
+  phoneNumber String @unique
   password String
   name     String?
   posts    Post[]
 }
```


