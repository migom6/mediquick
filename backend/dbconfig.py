from pymongo import MongoClient
def dbconfig(DB_NAME, DB_HOST, DB_PORT, DB_USER, DB_PASS):
  try:
    connection = MongoClient(DB_HOST, DB_PORT)
    db = connection[DB_NAME]
    db.authenticate(DB_USER, DB_PASS)
    return(db, True)
  except:
    return(None, False)