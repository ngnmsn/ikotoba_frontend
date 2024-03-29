export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      group_table: {
        Row: {
          createdate: string | null
          detail: string | null
          groupid: number
          groupname: string | null
          updatedate: string | null
        }
        Insert: {
          createdate?: string | null
          detail?: string | null
          groupid?: number
          groupname?: string | null
          updatedate?: string | null
        }
        Update: {
          createdate?: string | null
          detail?: string | null
          groupid?: number
          groupname?: string | null
          updatedate?: string | null
        }
      }
      member_table: {
        Row: {
          codename: string | null
          createdate: string | null
          groupid: number
          memberid: number
          updatedate: string | null
          userid: string
        }
        Insert: {
          codename?: string | null
          createdate?: string | null
          groupid?: number
          memberid?: number
          updatedate?: string | null
          userid: string
        }
        Update: {
          codename?: string | null
          createdate?: string | null
          groupid?: number
          memberid?: number
          updatedate?: string | null
          userid?: string
        }
      }
      secret_word_table: {
        Row: {
          createdate: string | null
          creatememberid: number | null
          description: string | null
          groupid: number
          invalid: boolean | null
          meaning: string | null
          secretwordbody: string | null
          secretwordid: number
          secretwordtitle: string | null
          updatedate: string | null
          updatememberid: number | null
        }
        Insert: {
          createdate?: string | null
          creatememberid?: number | null
          description?: string | null
          groupid?: number
          invalid?: boolean | null
          meaning?: string | null
          secretwordbody?: string | null
          secretwordid?: number
          secretwordtitle?: string | null
          updatedate?: string | null
          updatememberid?: number | null
        }
        Update: {
          createdate?: string | null
          creatememberid?: number | null
          description?: string | null
          groupid?: number
          invalid?: boolean | null
          meaning?: string | null
          secretwordbody?: string | null
          secretwordid?: number
          secretwordtitle?: string | null
          updatedate?: string | null
          updatememberid?: number | null
        }
      }
      talk_record_table: {
        Row: {
          cancelflg: boolean | null
          createdate: string | null
          creatememberid: number
          secretwordid: number
          talkrecordid: number
          talksessionid: number
          updatedate: string | null
        }
        Insert: {
          cancelflg?: boolean | null
          createdate?: string | null
          creatememberid?: number
          secretwordid?: number
          talkrecordid?: number
          talksessionid?: number
          updatedate?: string | null
        }
        Update: {
          cancelflg?: boolean | null
          createdate?: string | null
          creatememberid?: number
          secretwordid?: number
          talkrecordid?: number
          talksessionid?: number
          updatedate?: string | null
        }
      }
      talk_session_table: {
        Row: {
          createdate: string | null
          detail: string | null
          groupid: number
          sessionname: string | null
          talksessionid: number
          updatedate: string | null
        }
        Insert: {
          createdate?: string | null
          detail?: string | null
          groupid?: number
          sessionname?: string | null
          talksessionid?: number
          updatedate?: string | null
        }
        Update: {
          createdate?: string | null
          detail?: string | null
          groupid?: number
          sessionname?: string | null
          talksessionid?: number
          updatedate?: string | null
        }
      }
      user_table: {
        Row: {
          createdate: string | null
          mailaddress: string | null
          status: string | null
          updatedate: string | null
          userid: string
          username: string | null
        }
        Insert: {
          createdate?: string | null
          mailaddress?: string | null
          status?: string | null
          updatedate?: string | null
          userid: string
          username?: string | null
        }
        Update: {
          createdate?: string | null
          mailaddress?: string | null
          status?: string | null
          updatedate?: string | null
          userid?: string
          username?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  storage: {
    Tables: {
      buckets: {
        Row: {
          allowed_mime_types: string[] | null
          avif_autodetection: boolean | null
          created_at: string | null
          file_size_limit: number | null
          id: string
          name: string
          owner: string | null
          public: boolean | null
          updated_at: string | null
        }
        Insert: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id: string
          name: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
        Update: {
          allowed_mime_types?: string[] | null
          avif_autodetection?: boolean | null
          created_at?: string | null
          file_size_limit?: number | null
          id?: string
          name?: string
          owner?: string | null
          public?: boolean | null
          updated_at?: string | null
        }
      }
      migrations: {
        Row: {
          executed_at: string | null
          hash: string
          id: number
          name: string
        }
        Insert: {
          executed_at?: string | null
          hash: string
          id: number
          name: string
        }
        Update: {
          executed_at?: string | null
          hash?: string
          id?: number
          name?: string
        }
      }
      objects: {
        Row: {
          bucket_id: string | null
          created_at: string | null
          id: string
          last_accessed_at: string | null
          metadata: Json | null
          name: string | null
          owner: string | null
          path_tokens: string[] | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          bucket_id?: string | null
          created_at?: string | null
          id?: string
          last_accessed_at?: string | null
          metadata?: Json | null
          name?: string | null
          owner?: string | null
          path_tokens?: string[] | null
          updated_at?: string | null
          version?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      can_insert_object: {
        Args: {
          bucketid: string
          name: string
          owner: string
          metadata: Json
        }
        Returns: undefined
      }
      extension: {
        Args: {
          name: string
        }
        Returns: string
      }
      filename: {
        Args: {
          name: string
        }
        Returns: string
      }
      foldername: {
        Args: {
          name: string
        }
        Returns: unknown
      }
      get_size_by_bucket: {
        Args: Record<PropertyKey, never>
        Returns: {
          size: number
          bucket_id: string
        }[]
      }
      search: {
        Args: {
          prefix: string
          bucketname: string
          limits?: number
          levels?: number
          offsets?: number
          search?: string
          sortcolumn?: string
          sortorder?: string
        }
        Returns: {
          name: string
          id: string
          updated_at: string
          created_at: string
          last_accessed_at: string
          metadata: Json
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
