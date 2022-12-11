import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
} from "sequelize-typescript";

@Table
export class Post extends Model {
  @Column
  title!: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
