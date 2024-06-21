/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EntryWhereInput } from "./EntryWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EntryOrderByInput } from "./EntryOrderByInput";

@ArgsType()
class EntryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EntryWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EntryWhereInput, { nullable: true })
  @Type(() => EntryWhereInput)
  where?: EntryWhereInput;

  @ApiProperty({
    required: false,
    type: [EntryOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EntryOrderByInput], { nullable: true })
  @Type(() => EntryOrderByInput)
  orderBy?: Array<EntryOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { EntryFindManyArgs as EntryFindManyArgs };
