# Migration `20200112220853-add-timestamps-fields-to-post-and-user-object`

This migration has been generated at 1/12/2020, 10:08:53 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."User" ADD COLUMN "createdAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00' ,
ADD COLUMN "updatedAt" timestamp(3)  NOT NULL DEFAULT '1970-01-01 00:00:00' ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200112194110-init..20200112220853-add-timestamps-fields-to-post-and-user-object
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
@@ -18,8 +18,10 @@
 }
 model User {
   id       String  @default(cuid()) @id
+  createdAt DateTime @default(now())
+  updatedAt DateTime @updatedAt
   email    String  @unique
   password String
   name     String?
   posts    Post[]
```


