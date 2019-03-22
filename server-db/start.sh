if [ -d "/data/db" ]
then
  echo "it's here, damn..."
else
  sudo mkdir -p /data/db
fi
mongod
