import { Knex } from 'knex'

// prettier-ignore
export async function up(knex: Knex): Promise<void> {
  if (!(await knex.schema.hasTable('FAQ'))) {
    await knex.schema.createTable('FAQ', table => {
      table.increments('id')
      table.text('question').notNullable()
      table.text('answer').notNullable()
      table.timestamps(false, true)
    })
  }
}

// prettier-ignore
export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists('FAQ')
}
