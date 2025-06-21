#! /bin/bash

# cấp quyền truy cập cho file chmod +x run-build.sh 
# run file ./run-build.sh

# Đường dẫn thư mục
# change path when building
SOURCE_FOLDER='/Users/hongquang/Documents/fis/super-app-project/erequestApp/build'

DEST_FOLDER="/Users/hongquang/Documents/build_super_app/build_erequest_app"

# demo-sabeco for demo,
# prod-sabeco for product
BRANCH="demo-sabeco"

# Chạy lệnh `npm run build`
echo "Đang chạy lệnh npm run build..."
npm run build

# Kiểm tra trạng thái trả về từ `npm run build`
if [ $? -eq 0 ]; then
  echo "Build thành công!"

  cd "$DEST_FOLDER"
  git checkout "$BRANCH"
  cd "$SOURCE_FOLDER"
  cd ../

  # echo "upload code to gitlab"
  # git add .
  # git commit -m "update erequest"
  # git push origin develop-webpack
  # echo "Done!"

  # Kiểm tra xem thư mục nguồn có tồn tại không
  if [ ! -d "$SOURCE_FOLDER" ]; then
    echo "Thư mục nguồn $SOURCE_FOLDER không tồn tại!"
    exit 1
  fi

  # Kiểm tra và tạo thư mục đích nếu chưa tồn tại
  if [ ! -d "$DEST_FOLDER" ]; then
    echo "Thư mục đích $DEST_FOLDER không tồn tại! Đang tạo thư mục mới."
    mkdir -p "$DEST_FOLDER"
  else
    if [ "$(ls -A "$DEST_FOLDER")" ]; then
      echo "DEST_FOLDER đã tồn tại và không rỗng. Đang xóa nội dung..."
      rm -rf "$DEST_FOLDER"/*
    else
      echo "DEST_FOLDER đã tồn tại và rỗng. Tiếp tục..."
    fi
  fi

  # Di chuyển toàn bộ nội dung từ C sang D
  echo "Đang di chuyển nội dung từ $SOURCE_FOLDER sang $DEST_FOLDER..."
  mv "$SOURCE_FOLDER"/* "$DEST_FOLDER/"
  echo "Đã di chuyển toàn bộ nội dung từ $SOURCE_FOLDER sang $DEST_FOLDER."

  # upload github
  cd "$DEST_FOLDER"
  echo "Start upload vào Github..."
  git add .
  git commit -m "update erequest "$BRANCH""
  git push origin "$BRANCH"
  echo "Done!"

else
  echo "Build thất bại. Không thực hiện di chuyển thư mục."
  exit 1
fi