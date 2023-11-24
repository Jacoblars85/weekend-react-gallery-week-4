CREATE TABLE "gallery" (
  "id" SERIAL PRIMARY KEY,
  "url" VARCHAR,
  "title" VARCHAR,
  "description" TEXT,
  "likes" INTEGER DEFAULT 0
);

INSERT INTO "gallery" 
  ("url", "title", "description")
  VALUES
  ('images/goat_small.jpg', 'Goat!', 'Photo of a goat taken at Glacier National Park.'),
  ('images/EMU1.jpg', 'EMU!', 'Photo of my pet Egor the Emu having a good time.'),
  ('images/newsdetails.jpeg', 'Monkey!', 'Photo of my good friend george.'),
  ('images/ww-funny-animal-faces-hippopotamus.webp', 'Hippo!', 'Photo of Harold the Hippo taking a dip.'),
  ('images/50-Funny-Animal-Pictures-That-You-Need-In-Your-Life-2.jpg', 'Giraffe!', 'Photo of Gerard the Giraffe.'),
  ('images/maxresdefault.jpg', 'Panda!', 'Photo of Frank.');
  