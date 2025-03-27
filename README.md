# mongodb-change-streams
MongoDB Change Streams provide a way to listen to real-time changes in a collection, database, or deployment. 

They allow applications to react to changes such as inserts, updates, deletes, and more, as they happen.

# Key Features:
  **Real-Time Notifications**: Applications can subscribe to changes in data and get notified immediately.
  
  **Supported Operations:** Change Streams capture operations like insert, update, replace, delete, and invalidate.
  
  **Resume Tokens:** Change Streams provide a resume token, allowing you to resume listening from where you left off in case of interruptions.
  
  **Filtering:** You can filter specific changes using aggregation stages like $match.
  
# Requirements:

  MongoDB 3.6+.
  
  Replica sets or sharded clusters (Change Streams are not supported on standalone servers).
