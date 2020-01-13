# Failed inferMigrationSteps at 2020-01-12T23:50:00.347Z
## RPC One-Liner
```json
{"id":19,"jsonrpc":"2.0","method":"inferMigrationSteps","params":{"projectInfo":"","sourceConfig":"generator photon {\n  provider = \"photonjs\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = \"postgresql://devadmin:LeFdNnVS6qd3CbrJ@petmate-dev.czfxbljrxznh.us-east-1.rds.amazonaws.com:5432/petmate-dev\"\n}\n\nmodel Pet {\n  id        String   @default(cuid()) @id\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  published Boolean  @default(false)\n  name     String?\n  name     String?\n  owner    User?\n}\n\nmodel User {\n  id       String  @default(cuid()) @id\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  email    String?  @unique\n  phoneNumber String? @unique\n  password String\n  pets    Pet[]\n}","datamodel":"generator photon {\n  provider = \"photonjs\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = \"postgresql://devadmin:LeFdNnVS6qd3CbrJ@petmate-dev.czfxbljrxznh.us-east-1.rds.amazonaws.com:5432/petmate-dev\"\n}\n\nmodel Pet {\n  id        String   @default(cuid()) @id\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  published Boolean  @default(false)\n  name     String?\n  name     String?\n  owner    User?\n}\n\nmodel User {\n  id       String  @default(cuid()) @id\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  email    String?  @unique\n  phoneNumber String? @unique\n  password String\n  pets    Pet[]\n}","migrationId":"watch-20200112234959","assumeToBeApplied":[]}}
```

## RPC Input Readable
```json
{
  "id": 19,
  "jsonrpc": "2.0",
  "method": "inferMigrationSteps",
  "params": {
    "projectInfo": "",
    "sourceConfig": "generator photon {\n  provider = \"photonjs\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = \"postgresql://devadmin:LeFdNnVS6qd3CbrJ@petmate-dev.czfxbljrxznh.us-east-1.rds.amazonaws.com:5432/petmate-dev\"\n}\n\nmodel Pet {\n  id        String   @default(cuid()) @id\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  published Boolean  @default(false)\n  name     String?\n  name     String?\n  owner    User?\n}\n\nmodel User {\n  id       String  @default(cuid()) @id\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  email    String?  @unique\n  phoneNumber String? @unique\n  password String\n  pets    Pet[]\n}",
    "datamodel": "generator photon {\n  provider = \"photonjs\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = \"postgresql://devadmin:LeFdNnVS6qd3CbrJ@petmate-dev.czfxbljrxznh.us-east-1.rds.amazonaws.com:5432/petmate-dev\"\n}\n\nmodel Pet {\n  id        String   @default(cuid()) @id\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  published Boolean  @default(false)\n  name     String?\n  name     String?\n  owner    User?\n}\n\nmodel User {\n  id       String  @default(cuid()) @id\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  email    String?  @unique\n  phoneNumber String? @unique\n  password String\n  pets    Pet[]\n}",
    "migrationId": "watch-20200112234959",
    "assumeToBeApplied": []
  }
}
```

## Stack Trace
```bash
Jan 12 23:44:08.761  INFO migration_engine: Starting migration engine RPC server git_hash="e7579bd35e0938dbf773f1706c098a0d14a5a038"
Jan 12 23:44:09.658  INFO quaint::single: Starting a postgresql pool with 1 connections.    
Jan 12 23:44:10.667  INFO ListMigrations: migration_engine::commands::list_migrations: Returning 3 migrations (0 pending).
Jan 12 23:44:11.360  INFO ListMigrations: migration_engine::commands::list_migrations: Returning 3 migrations (0 pending).
Jan 12 23:48:14.787  INFO ListMigrations: migration_engine::commands::list_migrations: Returning 3 migrations (0 pending).
Jan 12 23:48:26.831  INFO ListMigrations: migration_engine::commands::list_migrations: Returning 4 migrations (0 pending).
Jan 12 23:49:02.775  INFO ListMigrations: migration_engine::commands::list_migrations: Returning 5 migrations (0 pending).
Jan 12 23:49:16.777  INFO ListMigrations: migration_engine::commands::list_migrations: Returning 6 migrations (0 pending).
Jan 12 23:49:58.858  INFO ListMigrations: migration_engine::commands::list_migrations: Returning 7 migrations (0 pending).
Jan 12 23:49:59.899  INFO ListMigrations: migration_engine::commands::list_migrations: Returning 7 migrations (0 pending).
```
