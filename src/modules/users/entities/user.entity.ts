import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';
import { Exclude } from 'class-transformer';
import { BaseModel } from 'src/base/base.entity';
import { StatusEnum } from 'src/enums/base.enum';

@Entity('user')
export class User extends BaseModel {
  constructor(partial: Partial<User>) {
    super();
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
    length: 60,
    unique: true,
    nullable: false,
  })
  email: string;

  @Exclude()
  @Column({
    type: 'varchar',
    length: 60,
    nullable: false,
  })
  password: string;

  @Column({
    name: 'status',
    type: 'enum',
    enum: StatusEnum,
    default: StatusEnum.InActive,
  })
  status: StatusEnum;
}
