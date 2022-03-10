import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    'mongodb+srv://xgranda:admin@autenticacionnextjs.p7awv.mongodb.net/project0?retryWrites=true&w=majority'
  );

  return client;
}
