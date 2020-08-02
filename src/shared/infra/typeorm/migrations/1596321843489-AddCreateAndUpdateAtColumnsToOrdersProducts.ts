import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddCreateAndUpdateAtColumnsToOrdersProducts1596321843489
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.addColumns('orders_products', [
      new TableColumn({ name: 'created_at', type: 'date', default: 'now()' }),
      new TableColumn({ name: 'updated_at', type: 'date', default: 'now()' }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropColumn('orders_products', 'created_at');
    await queryRunner.dropColumn('orders_products', 'updated_at');
  }
}
