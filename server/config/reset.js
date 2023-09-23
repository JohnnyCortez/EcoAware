import pool from "./database.js"
import "./dotenv.js"
import environmentData from "../data/issues.js"

const createIssuesTable = async () => {
const createTableQuery = `
    DROP TABLE IF EXISTS gifts;

    CREATE TABLE IF NOT EXISTS gifts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        main_cause TEXT NOT NULL,
        main_solution TEXT NOT NULL,
        image_url TEXT NOT NULL
    )
`

try {
    const res = await pool.query(createTableQuery)
    console.log('🎉 gifts table created successfully')
} catch(err) {
    console.log('⚠️ error creating gifts table', err)
}
}

const seedGiftsTable = async () => {
    await createIssuesTable()
    environmentData.forEach((gift) => {
        const insertQuery = {
            text: 'INSERT INTO gifts (name, description, main_cause, main_solution, image_url) VALUES ($1, $2, $3, $4, $5)'
          }
          const values = [
            gift.name,
            gift.description,
            gift.main_cause,
            gift.main_solution,
            gift.image_url,
        ]
        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting gift', err)
                return
            }
        
            console.log(`✅ ${gift.name} added successfully`)
        })
    })
  }

  seedGiftsTable()
