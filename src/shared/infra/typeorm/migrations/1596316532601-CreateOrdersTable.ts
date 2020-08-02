import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateOrdersTable1596316532601
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'orders',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          { name: 'customer_id', type: 'uuid' },
          { name: 'created_at', type: 'date', default: 'now()' },
          { name: 'updated_at', type: 'date', default: 'now()' },
        ],
        foreignKeys: [
          {
            name: 'CustomerOrder',
            referencedTableName: 'customers',
            referencedColumnNames: ['id'],
            columnNames: ['customer_id'],
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  // product_id, order_id, price e quantity, created_at e updated_at

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey('orders', 'CustomerOrder');
    await queryRunner.dropTable('orders');
  }
}
