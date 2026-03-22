import os

def replace_in_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return

    new_content = content
    # Replace domains
    new_content = new_content.replace('fabyapp.com', 'fabylearn.com')
    # Let me also check if `fabuapp.com` was still anywhere, though `fabyapp.com` covers it
    new_content = new_content.replace('fabuapp.com', 'fabylearn.com')

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {filepath}")

def main():
    directory = '/Users/yigitozdemir/Desktop/projeler/Masalla/masalai_web'
    for root, dirs, files in os.walk(directory):
        if '.git' in root or 'node_modules' in root:
            continue
        for file in files:
            if file.endswith(('.html', '.js', '.css', '.json', '.txt', '.xml')):
                filepath = os.path.join(root, file)
                replace_in_file(filepath)

if __name__ == '__main__':
    main()
