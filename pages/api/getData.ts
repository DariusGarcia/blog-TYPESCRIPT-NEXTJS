// @ts-nocheck
import type { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2'


type Data = {
  name: string;
};

interface DBValues {
    id: number;
    user_id: number;
    title: string;
    content: string;
    image: string,
    created_at: string;

}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    // Connect to database
const db = mysql.createConnection(
	{
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
	}, 
	console.log("🚀 ~ Connected to database")
)

try {
    const DBquery = "SELECT user_id, title, content, image FROM posts";

    db.query(
        DBquery,
        function(err, data, fields) {
        console.log({"database data": data})
        res.status(200).json({data: data})
        }
      );

    db.end()

} catch (e) {
    res.status(500).json({error: e.message})

}
}
