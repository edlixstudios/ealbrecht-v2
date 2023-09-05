-- CreateTable
CREATE TABLE "features" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "activate" BOOLEAN,

    CONSTRAINT "features_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "games" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR NOT NULL DEFAULT 'GameName',
    "logo" TEXT NOT NULL,
    "preview" TEXT NOT NULL,
    "iOSLink" VARCHAR,
    "androidLink" VARCHAR,
    "webLink" VARCHAR,
    "web" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skills" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT,
    "skill" JSON,

    CONSTRAINT "skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "myskills" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "myskills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "skill" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "myskillsId" TEXT,

    CONSTRAINT "skill_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "skill" ADD CONSTRAINT "skill_myskillsId_fkey" FOREIGN KEY ("myskillsId") REFERENCES "myskills"("id") ON DELETE SET NULL ON UPDATE CASCADE;
