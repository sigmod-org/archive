"""Set each file's modification time from a hash of its contents.

The SFTP deploy (rclone) decides what to upload by comparing size and modification time, because
the server cannot compute checksums. A fresh build gives every file a new time, which would upload
all of them; after this script, a file keeps the same time across builds unless its contents change.

usage: python3 scripts/stamp_mtimes.py _site
"""
import hashlib, os, sys

BASE = 946684800        # 2000-01-01 UTC
SPAN = 20 * 365 * 86400  # times fall between 2000 and 2020

def stamp(root):
    n = 0
    for dirpath, _, files in os.walk(root):
        for name in files:
            path = os.path.join(dirpath, name)
            h = hashlib.sha256()
            with open(path, "rb") as f:
                for chunk in iter(lambda: f.read(1 << 20), b""):
                    h.update(chunk)
            t = BASE + int.from_bytes(h.digest()[:8], "big") % SPAN
            os.utime(path, (t, t))
            n += 1
    print(f"stamped {n} files in {root}")

if __name__ == "__main__":
    stamp(sys.argv[1] if len(sys.argv) > 1 else "_site")
