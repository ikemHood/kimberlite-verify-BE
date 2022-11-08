import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'discord_id', unique: true })
  discordId: string;

  @Column({ name: 'twitter_id', unique: true })
  twitterId: string;

  @Column({ name: 'twitter_username' })
  twitterUsername: string;

  @Column()
  tag: string;

  @Column({ nullable: true })
  avatar: string;

  @Column()
  username: string;

  @Column()
  discriminator: string;

  @Column({ name: 'twitter_access_token' })
  twtAccessToken: string;

  @Column({ name: 'twitter_refresh_token' })
  twtRefreshToken: string;

  @Column({ name: 'discord_access_token' })
  DcAccessToken: string;

  @Column({ name: 'discord_refresh_token' })
  DcRefreshToken: string;
}
