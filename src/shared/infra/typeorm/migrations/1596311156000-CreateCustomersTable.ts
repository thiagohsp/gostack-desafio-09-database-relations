import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateCustomersTable1596311156000
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'customers',
        columns: [
          // name, email, created_at, updated_at
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          { name: 'name', type: 'varchar', isNullable: false },
          { name: 'email', type: 'varchar', isUnique: true },
          { name: 'created_at', type: 'date', default: 'now()' },
          { name: 'updated_at', type: 'date', default: 'now()' },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('customers');
  }
}
