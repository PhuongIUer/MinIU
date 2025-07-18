import os

def list_all_items_to_txt(output_file='full_list.txt', start_path=None):
    # Nếu không chỉ định thư mục bắt đầu thì dùng thư mục hiện tại
    if start_path is None:
        start_path = os.getcwd()
    
    # Mở file để ghi
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(f"Danh sách đầy đủ các file và thư mục (đệ quy):\n")
        f.write(f"Thư mục gốc: {start_path}\n\n")
        
        # Duyệt đệ quy qua tất cả các thư mục
        for root, dirs, files in os.walk(start_path):
            # Ghi đường dẫn thư mục hiện tại
            level = root.replace(start_path, '').count(os.sep)
            indent = ' ' * 4 * level
            f.write(f"{indent}[Thư mục] {os.path.basename(root)}/\n")
            
            # Ghi tất cả các file trong thư mục hiện tại
            sub_indent = ' ' * 4 * (level + 1)
            for file in files:
                f.write(f"{sub_indent}- {file}\n")

    print(f"Đã ghi danh sách đầy đủ vào file {output_file}")

# Chạy chương trình
if __name__ == "__main__":
    list_all_items_to_txt()