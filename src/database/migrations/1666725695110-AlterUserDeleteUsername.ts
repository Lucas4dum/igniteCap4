import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterUserDeleteUsername1666725695110 implements MigrationInterface {
    name = 'AlterUserDeleteUsername1666725695110'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "username")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("users",
        new TableColumn({
            name: "username",
            type: "varchar"
        }))
    }
}
