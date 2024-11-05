import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ type: 'tinyint', nullable: false, default: 4 })
  weeks: number;

  @Column({ type: 'double', nullable: false })
  tuition: number;

  @Column({
    name: 'minimun_skill',
    type: 'enum',
    enum: ['Beginner', 'Intermediate', 'Advanced'],
  })
  minimunSkill: minimunSkill;

  @Column ({ type: "timestamp", default: () => "CURRENT_TIMESTAMP", name: "created_at"})
  createdAt: Date;
  
}

enum minimunSkill {
  'Beginner',
  'Intermediate',
  'Advanced',
}
