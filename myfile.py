from datetime import datetime

now: datetime = datetime.now()

print(f"What don't you know? It's {now:%H:%M}!")